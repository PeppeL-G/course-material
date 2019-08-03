const child_process = require('child_process')

const commands = [
	
	// Build it.
	"npm run build",
	
	// Commit it.
	"cd src/.vuepress/dist",
	"git init",
	"git add -A",
	'git commit -m "New deploy."',
	
	// Push it.
	"git push -f https://github.com/PeppeL-G/course-material.git master:github-pages",
	
	// Go back to previous directory.
	"cd -",
	
]

// Execute all commands.
for(const command of commands){
	console.log("Executing: "+command)
	const output = child_process.execSync(command)
	console.log(output)
}
