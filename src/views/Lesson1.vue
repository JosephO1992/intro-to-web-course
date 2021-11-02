<template>
  <page-layout>
    <h2 class="font-bold mb-8 underline border-b-2 pb-4 border-gray-800">
      Lesson 1 - About HTML, CSS & JavaScript
    </h2>
    <i class="mb-4"
      >Let's take a step back and talk about what HTML, CSS & JavaScript
      actually are.</i
    >
    <h3 class="mb-4">
      <strong>H</strong>yper <strong>T</strong>ext <strong>M</strong>arkup
      <strong>L</strong>anguage
    </h3>
    <p class="mb-4">
      Imagine you are building a house. You have might have some bricks,
      windows, doors, pipes amongst other materials and building blocks to make
      the house.
    </p>
    <p class="mb-4">HTML elements are the building blocks of the web.</p>
    <p class="mb-4">
      When we changed the HTML in our file earlier, this was in the
      <code>body</code> tag. We use all different types of tags and they are
      supposed to represent a certain type of building block. Some examples
      below:
    </p>

    <ul class="flex flex-col ml-8">
      <li
        v-for="(tag, index) in tags"
        :key="index"
        class="mb-6 text-lg flex flex-col"
      >
        <p class="mb-2">{{ tag.tag }}</p>
        <p>{{ tag.description }}</p>
      </li>
    </ul>
  </page-layout>
</template>
<script>
import PageLayout from "../layouts/PageLayout.vue";
export default {
  components: {
    PageLayout,
  },
  data() {
    return {
      tags: [
        {
          tag: "<h1>...<h5> - heading/s",
          description:
            "Declares that something is a heading on a page. Best practise to have 1 <h1> tag per page. This also helps search engines like google determine what the main theme of your web page will be about.",
        },
        {
          tag: "<p> - paragraph",
          description: "This is used for general text on a website.",
        },
        {
          tag: "<ul> / <ol> - unordered / ordered list",
          description:
            "Used for lists, unordered will have a bullet point by default, and ordered lists will be numbered.",
        },
        {
          tag: "<li> - list item, appears in an <ul> / <ol>",
          description: "This is what your list should contain.",
        },
        {
          tag: "<a> - anchor tag.",
          description:
            "Links to other pages on your site, or other websites are defined in these. This is what 'anchors' your site to other websites.",
        },
        {
          tag: "<div>",
          description:
            "Used to help with general styling with your site by putting content into blocks that you can then style and align to create layouts.",
        },
      ],
    };
  },
};
</script>
