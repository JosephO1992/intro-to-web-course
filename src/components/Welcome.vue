<template>
	<div class="flex flex-col p-5 text-xl ">
		<h2 class="font-bold text-left mb-8 underline border-b-2 pb-4 border-gray-800">Intro</h2>
    <p class="text-left mb-4">Hi there! 👋🏻 My name is Joe, I'm a Software Devloper and I'd like to share my passion with you.</p>
  
		<p class="text-left mb-4">
			🙏🏻 Welcome to your introduction into Web Development.
		</p>

		<p class="text-left mb-4">The aim of the course is to:</p>
			<ul
				class="flex flex-col text-left ml-8"
				v-for="(aim, index) in aims"
				:key="index"
			>
				<li class="mb-4">{{ aim }}</li>
			</ul>

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
