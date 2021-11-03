<template>
  <page-layout>
    <h2 class="font-bold mb-8 underline border-b-2 pb-4 border-gray-800">
      Lesson 2 - Let's make some things
    </h2>
    <h3 class="mb-4">Exercise 1 - Start your webpage</h3>
    <p class="text-left mb-4">
      I want you to make a basic homepage (we will style it later).
    </p>
    <p class="text-left mb-4">This should include:</p>
    <ol class="flex flex-col ml-8">
      <li class="mb-6 text-lg flex flex-col">
        <p class="mb-2">
          A header tag <code>&lt;h1&gt;</code> with the name of your homepage.
        </p>
      </li>
      <li class="mb-6 text-lg flex flex-col">
        <p class="mb-2">
          A p tag <code>&lt;p&gt;</code> with a brief introduction about yourself.
        </p>
      </li>
      <li class="mb-6 text-lg flex flex-col">
        <p class="mb-2">
          2 lists, one using <code>&lt;ul&gt;</code> and another using <code>&lt;ol&gt;</code>.
          Ideas for this could be your favorite movies, foods, sports, football
          players, games, anything you like!
        </p>
      </li>
      <li class="mb-6 text-lg flex flex-col">
        <p class="mb-2">
          Finally, an <code>&lt;a&gt;</code> which can link to your favorite website,
          you can make this related to your list if you like.
        </p>
      </li>
    </ol>

    <p class="text-left mb-4">
      Now, this will be the start of your web development journey, you may have
      to google your way through it, and that's fine. Some other useful
      resources are:
      <a
        href="https://developer.mozilla.org/en-US/"
        class="text-gray-500 hover:text-blue-500"
        >Mozilla Developer Docs</a
      >
      and
      <a
        href="https://www.w3schools.com/html/default.asp"
        class="text-gray-500 hover:text-blue-500"
        >W3Schools</a
      >.
    </p>
  </page-layout>
</template>
<script>
import PageLayout from "../layouts/PageLayout.vue";
export default {
  components: {
    PageLayout,
  },
};
</script>
