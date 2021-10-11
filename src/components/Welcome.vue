<template>
<div class="flex flex-col flex-grow h-full">
	<div class="flex flex-col p-5 text-xl bg-gray-100 flex-grow text-left">
		<h2 class="font-bold mb-8 underline border-b-2 pb-4 border-gray-800">Intro</h2>
    <p class="mb-4">Hi there! 👋🏻 My name is Joe O'Reilly, I'm a Software Devloper. I've been developing in my own time for a while now, and in the last few months it's become my full time job.</p>
    <p class="mb-4">I'd like to share my passion with you, and hopefully you can learn something new and exciting.</p>
  
		<p class="mb-4">
			🙏🏻 Welcome to your introduction into Web Development.
		</p>

		<p class="mb-4">The aim of the course is to:</p>
			<ul
				class="flex flex-col ml-8"
				v-for="(aim, index) in aims"
				:key="index"
			>
				<li class="mb-6">{{ aim }}</li>
			</ul>
	<h2 class="mb-4 font-bold">Let's get the tooling set up:</h2>
	<p class="mb-4">Head over to the <a href="https://code.visualstudio.com/download" target="_blank" class="underline text-green-500">Visual Studio Code</a> website and download the software.</p>

	<ul class="flex flex-col ml-8">
		<li v-for="(step, index) in steps" :key="index" class="mb-6 flex flex-row">
			<p class="flex flex-shrink-0">{{step.step}}:</p><p class="ml-4">{{step.instruction}}</p>
		</li>
	</ul>
	<div class="w-1/2 flex flex-row justify-around mx-auto mb-8">
		<div>✨</div>
		<div>🎆</div>
		<div>✨</div>
		<div>🎆</div>
		<div>✨</div>
	</div>
	</div>
</div>
</template>

<script>
	export default {
		name: "Welcome",
		data() {
			return {
				aims: [
					"📖 Give you an understanding of what Web Development is.",
					"🧱 Build yourself a website.",
					"🙋🏼 Get you curious about Web Development and about what you can build.",
					"🔥 Have fun!",
				],
				steps: [
					
					{
						step: 'Step 1',
						instruction: 'Open Visual Studio Code'
					},
					{
						step: 'Step 2',
						instruction: '\'Ctrl + N\' to create a new file, then \'Ctrl + S\' to save it. Save it in a folder (call it whatever you like), and save it as index.html'
					},
					{
						step: 'Step 3',
						instruction: 'In the top left, self File -> Open -> Open the folder where you saved index.html'
					},
					{
						step: 'Step 4',
						instruction: 'Type \'!\' then press tab, you will now get some boiler plate html code in the index.html file.'
					},
					{
						step: 'Step 5',
						instruction: 'There will be a <title><title> tag, put \'My First Website\' between the tags. Now between the <body><body> tags, add \'Hello World\'. Next, press \'Ctrl + O + L\'. Your first website should now be opening up in the browser!'
					}
					
				]
			};
		},
	};
</script>
