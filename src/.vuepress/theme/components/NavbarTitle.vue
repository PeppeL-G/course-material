<template>
	<span
		ref="siteName"
		class="site-name"
		:class="{ 'can-hide': $site.themeConfig.logo }"
	>
		{{ $parent.$page.frontmatter.navbarTitle || $parent.$page.frontmatter.title}}
	</span>
</template>

<style lang="stylus">
.site-name
	font-size 1.3rem
	font-weight 600
	color $textColor
	position relative
	white-space: nowrap
</style>