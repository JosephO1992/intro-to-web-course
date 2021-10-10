<template>
<div class="flex flex-col flex-grow h-full">
	<div class="flex flex-col p-5 text-xl flex-grow text-left">
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
				<li class="mb-4">{{ aim }}</li>
			</ul>
	<h2 class="mb-4">Let's get the tooling set up:</h2>
	<p>Head over to the <a href="https://code.visualstudio.com/download" target="_blank" class="underline text-green-500">Visual Studio Code</a> website and download the software.</p>
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
			};
		},
	};
</script>
