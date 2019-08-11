// Install dependency by running: npm install jwt-decode
const jwtDecode = require('jwt-decode')

const rootPath = "http://localhost:8000"

let accessToken = null

async function sendRequest(uri, method, body=null, contentType="application/json"){
	
	let bodyToSend = ""
	
	const headers = new Headers()
	
	// Add the access token if signed in.
	if(accessToken != null){
		headers.append("Authorization", "Bearer "+accessToken)
	}
	
	// Add the body if available.
	if(body != null){
		
		headers.append("Content-Type", contentType)
		
		switch(contentType){
			
			case "application/json":
				bodyToSend = JSON.stringify(body)
				break
			
			case "application/x-www-form-urlencoded":
				const data = new URLSearchParams()
				for(const key of body){
					data.append(key, body[key])
				}
				bodyToSend = data.toString()
				break
			
			default:
				alert("ERROR, unknown Content-Type to send body with.")
			
		}
		
	}
	
	try{
		
		return await fetch(rootPath+uri, {
			method,
			headers,
			body: bodyToSend
		})
		
	}catch(error){
		throw ["networkError"] 
	}
	
}

function displayError(response){
	
	alert(`
		SDK has not been programmed to handle status code ${response.status}
		for the last request sent.
	`)
	
}

module.exports.getAllAccounts = async function(callback){
	
	let response
	
	try{
		response = await sendRequest("GET", "/accounts")
	}catch(errors){
		callback(errors)
		return
	}
	
	let errors = []
	let accounts = []
	
	switch(response.status){
		
		case 200:
			accounts = await response.json()
			break
		
		case 500:
			errors = ["backendError"]
			break
		
		default:
			displayError(response)
		
	}
	
	callback(errors, accounts)
	
}

module.exports.getAccountById = async function(id, callback){
	
	let response
	
	try{
		response = await sendRequest("GET", "/accounts/"+id)
	}catch(errors){
		callback(errors)
		return
	}
	
	let errors = []
	let account = null
	
	switch(response.status){
		
		case 200:
			account = await response.json()
			break
		
		case 404:
			account = null
			break
		
		case 500:
			errors = ["backendError"]
			break
		
		default:
			displayError(response)
		
	}
	
	callback(errors, account)
	
}

module.exports.createAccount = async function(account, callback){
	
	let response
	
	try{
		response = await sendRequest("POST", "/accounts", account)
	}catch(errors){
		callback(errors)
		return
	}
	
	let errors = []
	let id = -1
	
	switch(response.status){
		
		case 201:
			const locationHeader = response.headers.get("Location")
			id = parseInt(locationHeader.substr("/accounts/".length))
			break
		
		case 400:
			errors = await response.json()
			break
		
		case 422:
			errors = ["invalidAccount"]
			break
		
		case 500:
			errors = ["backendError"]
			break
		
		default:
			displayError(response)
		
	}
	
	callback(errors, id)
	
}



module.exports.signIn = async function(username, password, callback){
	
	const bodyToSend = {
		username,
		password,
		grant_type: "password"
	}
	
	let response
	
	try{
		response = await sendRequest("POST", "/token", bodyToSend, "application/x-www-form-urlencoded")
	}catch(errors){
		callback(errors)
		return
	}
	
	let errors = []
	let account = {
		id: -1,
		username: ""
	}
	
	let body
	
	switch(response.status){
		
		case 200:
			
			body = await response.json()
			
			accessToken = body.access_token
			
			const payload = jwtDecode(body.id_token)
			account.id = payload.sub
			account.username = payload.preferred_username
			
			break
		
		case 400:
			
			body = await response.json()
			
			switch(body.error){
				
				case "invalid_grant":
					errors = ["wrongCredentials"]
					break
				
				default:
					errors = ["unknownErrorGettingToken: "+body.error]
					alert(`
						SDK has not been programmed to handle error ${body.error}
						when failing to login.
					`)
				
			}
			
			break
		
		default:
			displayError(response)
		
	}
	
	callback(errors, account)
	
}

module.exports.signOut = async function(callback){
	accessToken = null
	callback()
}



module.exports.getAllActivities = async function(callback){
	
	let response
	
	try{
		response = await sendRequest("GET", "/activities")
	}catch(errors){
		callback(errors)
		return
	}
	
	let errors = []
	let activities = []
	
	switch(response.status){
		
		case 200:
			activities = await response.json()
			break
		
		case 500:
			errors = ["backendError"]
			break
		
		default:
			displayError(response)
		
	}
	
	callback(errors, activities)
	
}

module.exports.getActivitiesByAccountId = async function(accountId, callback){
	
	let response
	
	try{
		response = await sendRequest("GET", "/activities?accountId="+accountId)
	}catch(errors){
		callback(errors)
		return
	}
	
	let errors = []
	let activities = []
	
	switch(response.status){
		
		case 200:
			activities = await response.json()
			break
		
		case 500:
			errors = ["backendError"]
			break
		
		default:
			displayError(response)
		
	}
	
	callback(errors, activities)
	
}

module.exports.getActivityById = async function(id, callback){
	
	let response
	
	try{
		response = await sendRequest("GET", "/activities/"+id)
	}catch(errors){
		callback(errors)
		return
	}
	
	let errors = []
	let activity = null
	
	switch(response.status){
		
		case 200:
			activity = await response.json()
			break
		
		case 404:
			activity = null
			break
		
		case 500:
			errors = ["backendError"]
			break
		
		default:
			displayError(response)
		
	}
	
	callback(errors, account)
	
}

module.exports.createActivity = async function(activity, callback){
	
	let response
	
	try{
		response = await sendRequest("POST", "/activities", account)
	}catch(errors){
		callback(errors)
		return
	}
	
	let errors = []
	let id = -1
	
	switch(response.status){
		
		case 201:
			const locationHeader = response.headers.get("Location")
			id = parseInt(locationHeader.substr("/activities/".length))
			break
		
		case 400:
			errors = await response.json()
			break
		
		case 401:
			errors = await response.json()
			break
		
		case 422:
			errors = ["invalidActivity"]
			break
		
		case 500:
			errors = ["backendError"]
			break
		
		default:
			displayError(response)
		
	}
	
	callback(errors, id)
	
}

module.exports.updateActivityById = async function(id, activity, callback){
	
	let response
	
	try{
		response = await sendRequest("PUT", "/activities/"+id, activity)
	}catch(errors){
		callback(errors)
		return
	}
	
	let errors = []
	
	switch(response.status){
		
		case 204:
			break
		
		case 400:
			errors = await response.json()
			break
		
		case 401:
			errors = await response.json()
			break
		
		case 404:
			errors = ["notFound"]
			break
		
		case 422:
			errors = ["invalidActivity"]
			break
		
		case 500:
			errors = ["backendError"]
			break
		
		default:
			displayError(response)
		
	}
	
	callback(errors)
	
}

module.exports.deleteActivityById = async function(id, callback){
	
	let response
	
	try{
		response = await sendRequest("DELETE", "/activities/"+id)
	}catch(errors){
		callback(errors)
		return
	}
	
	let errors = []
	
	switch(response.status){
		
		case 204:
			break
		
		case 401:
			errors = await response.json()
			break
		
		case 404:
			errors = ["notFound"]
			break
		
		case 500:
			errors = ["backendError"]
			break
		
		default:
			displayError(response)
		
	}
	
	callback(errors)
	
}