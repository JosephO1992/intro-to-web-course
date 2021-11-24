<template>
    <page-layout>
        <h2 class="font-bold mb-8 underline border-b-2 pb-4 border-gray-800">
            Lesson 5 - Start a basic website
        </h2>
        <h3 class="mb-4">We are going to make a navigation bar for a website.</h3>
        <p class="mb-2">This will involve making links to different pages in our folder, so a user can click to and from different pages.</p>
        <p class="mb-2">Let's make a new folder called Website in VS Code. Like usual, add in an index.html and copy the below into that file:</p>
        <p class="mb-4">In the index.html, copy and paste the code below in the file:</p>
        <code class="bg-gray-800 text-white p-4 mb-2">
            &lt;!DOCTYPE html&gt;<br>
            &lt;html lang="en"&gt;<br>
            &lt;head&gt;<br>
                &lt;meta charset="UTF-8"&gt;<br>
                &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;<br>
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br>
                &lt;title&gt;Hello World&lt;/title&gt;<br>
                &lt;link rel="stylesheet" href="style.css"&gt;<br>
            &lt;/head&gt;<br>
            &lt;body&gt;<br>
                
            &lt;nav&gt;<br>
            &lt;ul&gt;<br>
                &lt;li&gt;<br>
                    &lt;a href="/index.html"&gt;Home&lt;/a&gt;<br>
                &lt;/li&gt;<br>
                &lt;li&gt;<br>
                    &lt;a href="#"&gt;About&lt;/a&gt;<br>
                &lt;/li&gt;<br>
                &lt;li&gt;<br>
                    &lt;a href="#"&gt;Contact&lt;/a&gt;<br>
                &lt;/li&gt;<br>
                &lt;li&gt;<br>
                    &lt;a href="#"&gt;My Interest&lt;/a&gt;<br>
                &lt;/li&gt;<br>
            &lt;/ul&gt;<br>
        &lt;/nav&gt;<br>

		&lt;h1&gt;Let's Make a Navigation Bar&lt;/h1&gt;<br>
        &lt;a href="/about.html"&gt;About Page&lt;/a&gt;<br>
		&lt;p&gt;To make the about link work, add another html file called about.html into your main foler. This is now going to navigate you to that file when you click it. &lt;/p&gt;<br>
        &lt;p&gt;To make the other links work, you need to add a html file, then in the href attribute, you can add "/myfilename", then it should work.&lt;/p&gt;<br>
        &lt;p&gt;Example:  &lt;a href="/index.html"&gt;Home&lt;/a&gt; will work to go home. Add this into the new pages (once you've added the usual HTML to make the page work, ! -> tab)&lt;/p&gt;<br>


            &lt;/body&gt;<br>
            &lt;/html&gt;<br>
        </code>
        <p class="mb-4">Start your local server from the index.html file (Go Live in the bottom right). See how you get on with the challenged and let me know if you need help!</p>
        <p class="mb-4">There is an easier way to do our css now. Add a styles.css file into your folder. This can be a central place to add in your styles. You import the CSS using a link tag, which is in the code above.</p>
        <p>CSS Challenges</p>
        <ul>
            <li>Get rid of the bullet points on the navigation list.</li>
            <li>Add "display: flex", "flex-direction: row", "justify-content: end"</li>
            <li>Add "margin-left: 20px" to the list items in the navigation.</li>
        </ul>
    
    </page-layout>
</template>
<script>
import PageLayout from '../layouts/PageLayout.vue';
export default {
    components: {
        PageLayout
    }
}
</script>