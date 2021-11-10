<template>
    <page-layout>
        <h2 class="font-bold mb-8 underline border-b-2 pb-4 border-gray-800">
            Lesson 4 - Challenges
        </h2>
        <h3 class="mb-4">Putting what we've learnt into practice.</h3>
        <p class="mb-2">It's time to make a new folder, and try some challenges using CSS.</p>
        <p class="mb-2">Firstly, I need you to make a new folder and call it CSS-Challenge. Next you need to add 2 new files, an index.html and style.css.</p>
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
                &lt;h1&gt;This is my website.&lt;/h1&gt;<br>

                &lt;p&gt;I have created this for an introduction to development course. This is a page designed with challenges for you.&lt;/p&gt;<br>

                &lt;ul&gt;<br>
                    &lt;li&gt;Turn me red.&lt;/li&gt;<br>
                    &lt;li&gt;Turn me blue.&lt;/li&gt;<br>
                    &lt;li&gt;Turn me pink.&lt;/li&gt;<br>
                    &lt;li&gt;Align me to the middle of the page.&lt;/li&gt;<br>
                    &lt;li&gt;Align me to the right of the page.&lt;/li&gt;<br>
                    &lt;li&gt;Turn me red and align me to the middle of the page.&lt;/li&gt;<br>
                &lt;/ul&gt;<br>

                &lt;h3&gt;Extra Challenges, feel free to use Google to help you: &lt;/h3&gt;<br>
                    &lt;ul&gt;<br>
                        &lt;li&gt;Try and get rid of the bullet points on the list. Hint: you need to change the list-style-type of the UL.&lt;/li&gt;<br>
                        &lt;li&gt;Center the text of the whole page.&lt;/li&gt;<br>
                        &lt;li&gt;Change the background of the page to black and the color of the text to white. (You can select the whole body of a page)&lt;/li&gt;<br>
                    &lt;/ul&gt;<br>
                
            &lt;/body&gt;<br>
            &lt;/html&gt;<br>
        </code>
        <p>Start your local server from the index.html file (Go Live in the bottom right). See how you get on with the challenged and let me know if you need help!</p>
    
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