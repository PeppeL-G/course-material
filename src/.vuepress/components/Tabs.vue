<template>
	<div class="tabs-component">
		<ul role="tablist" class="tabs-component-tabs">
			<li
				v-for="(tab, i) in tabs"
				:key="i"
				:class="{'is-selected': tab.isSelected}"
				class="tabs-component-tab"
				role="presentation"
			>
				<a
					:aria-controls="tab.id"
					:aria-selected="tab.isSelected"
					@click.prevent="changeToTabWithId(tab.id)"
					class="tabs-component-tab-a"
					role="tab"
				>{{tab.title}}</a>
			</li>
		</ul>
		<div class="tabs-component-panels">
			<slot/>
		</div>
	</div>
</template>

<script>

// An array holding references to all Tabs instances. Used because changing
// tab in one instance should also change to that tab in all other instances
// with the same rememberSelectedKey.
const tabsInstances = []

export default {
	
	props: {
		rememberSelectedKey: String
	},
	
	data(){
		return {
			tabs: [],
			selectedTabId: '',
		}
	},
	
	created(){
		this.tabs = this.$children
		tabsInstances.push(this)
	},
	
	destroyed(){
		tabsInstances.splice(tabsInstances.indexOf(this), 1)
	},
	
	mounted(){
		
		// Figure out which tab to display initially.
		let startTabId = this.getSelectedTabIdFromQueryString()
		
		if(!startTabId || !this.doesTabWithIdExist(startTabId)){
			startTabId = this.getSelectedTabIdFromLocalStorage()
		}
		
		if(!startTabId || !this.doesTabWithIdExist(startTabId)){
			if(0 < this.tabs.length){
				startTabId = this.tabs[0].id
			}
		}
		
		this.changeToTabWithId(startTabId)
		
	},
	
	methods: {
		
		getSelectedTabIdFromQueryString(){
			
			const urlParams = new URLSearchParams(window.location.search)
			const tabId = urlParams.get(this.rememberSelectedKey)
			
			return tabId
			
		},
		
		changeSelectedTabIdInQueryString(newSelectedTabId){
			
			const hash = window.location.hash
			
			const urlParams = new URLSearchParams(window.location.search)
			urlParams.set(this.rememberSelectedKey, newSelectedTabId)
			
			history.replaceState({}, "", "?"+urlParams.toString()+hash)
			
		},
		
		getSelectedTabIdFromLocalStorage(){
			return window.localStorage[this.rememberSelectedKey]
		},
		
		changeSelectedTabIdInLocalStorage(newSelectedTabId){
			window.localStorage[this.rememberSelectedKey] = newSelectedTabId
		},
		
		doesTabWithIdExist(tabIdToCheck){
			return this.tabs.some(t => t.id == tabIdToCheck)
		},
		
		changeToTabWithId(newSelectedTabId){
			
			this.changeSelectedTabIdInQueryString(newSelectedTabId)
			this.changeSelectedTabIdInLocalStorage(newSelectedTabId)
			
			this.changeToTabWithId2(newSelectedTabId)
			
			for(const tabs of tabsInstances){
				if(tabs.rememberSelectedKey == this.rememberSelectedKey){
					tabs.changeToTabWithId2(newSelectedTabId)
				}
			}
			
		},
		
		changeToTabWithId2(newSelectedTabId){
			
			for(const tab of this.tabs){
				tab.isSelected = (tab.id == newSelectedTabId)
			}
			
			this.selectedTabId = newSelectedTabId
			
		},
		
	},
}
</script>

<style >

.tabs-component{
	margin: 2em 0;
}

.tabs-component-tabs{
	border: solid 1px #ddd;
	border-radius: 6px;
	margin-bottom: 5px;
	padding-left: 0;
}

.tabs-component-tab{
	color: #999;
	font-size: 14px;
	font-weight: 600;
	margin-right: 0;
	list-style: none;
}
.tabs-component-tab:hover{
	color: #666;
}
.tabs-component-tab.is-selected{
	color: #3eaf7c;
}

.tabs-component-tab-a{
	align-items: center;
	color: inherit;
	display: flex;
	padding: .25em .5em;
	text-decoration: none;
	cursor: pointer;
}

.tabs-component-panels{
	padding: 1em 0;
}

@media (min-width: 700px){
	
	.tabs-component-tabs{
		border: 0;
		align-items: stretch;
		display: flex;
		justify-content: flex-start;
		margin-bottom: -1px;
	}
	
	.tabs-component-tab{
		background-color: #fff;
		border: solid 1px #ddd;
		border-radius: 3px 3px 0 0;
		margin-right: .25em;
		transition: transform .3s ease;
	}
	
	.tabs-component-tab.is-selected{
		border-bottom: solid 1px #fff;
		z-index: 2;
		transform: translateY(0);
	}
	
	.tabs-component-panels{
		border-top-left-radius: 0;
		background-color: #fff;
		border: solid 1px #ddd;
		border-radius: 0 6px 6px 6px;
		box-shadow: 0 0 10px rgba(0, 0, 0, .05);
		padding: 1em 1em;
	}
	
}

</style>