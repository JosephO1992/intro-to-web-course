<template>
    <page-layout>
         <h2 class="font-bold mb-8 underline border-b-2 pb-4 border-gray-800">
            Lesson 3 - CSS - Link a style sheet and talk about classes
        </h2>
            <h3 class="mb-4">Brief overview of IDs, Classes and Element Selectors.</h3>
            <p class="text-left mb-4">There are multiple different ways of selecting something on the page and changing it's appearance (CSS).
            </p>
            <ol class="flex flex-col ml-8">
                <li class="mb-6 text-lg flex flex-col">
                    <p class="mb-2">
                    Class - to do this, you add a class in the attribute, for example: 
                    </p>
                    <p>
                        <code>&lt;p class="text"&gt;</code>This has the class text.<code>&lt;/p&gt;</code>
                    </p>
                    <p>You can then target this in your CSS by adding "." before. So to add CSS to something with the class text, I would write: <code>.text { color: red } </code> to turn the text color red.</p>
                </li>
                <li class="mb-6 text-lg flex flex-col">
                    <p class="mb-2">
                    ID - to do this, you add an ID in the attribute. The same way you did with the class. However, an ID must be unique on the page, do not use the same ID more than once. 
                    </p>
                    <p>You can then target this in your CSS by adding "#" before. So to add CSS to something with the class text, I would write: <code>#text { color: red } </code> to turn the text color red.</p>
                </li>
                <li class="mb-6 text-lg flex flex-col">
                    <p class="mb-2">
                    By the element itself. 
                    </p>
                    <p>We done this last week, you can select something like: <code>p { color: red }.</code> A problem you run into though, it that it will change every element on that page. This is why we use ID and Class, as this takes a higher priority.</p>
                </li>
    
            </ol>

            <h3 class="mb-4">Exercise - Let's link a stylesheet</h3>
             <p class="text-left mb-4">Last week, we made an index.html file. Now in the same folder, I want you to make a new file called style.css.
            </p>
              <ol class="flex flex-col ml-8">
                <li class="mb-6 text-lg flex flex-col">
                    <p class="mb-2">
                        Last week, we made an index.html file. Now in the same folder, I want you to make a new file called style.css.
                    </p>
                </li>
                   <li class="mb-6 text-lg flex flex-col">
                    <p class="mb-2">
                      In the <code>&lt;header&gt; &lt;/header&gt;</code> of the page, start typing <code>&lt;link</code> and you will see the autocomplete dropdown options. Choose the link:css option. 
                    </p>
                </li>
                <li class="mb-6 text-lg flex flex-col">
                    <p class="mb-2">
                      This will give you an empty "", this should be filled with "/style.css", which will link your css folder to your html folder. 
                    </p>
                    <p>In the end it should look like this: </p>
                    <p class="mb-4"> <code>&lt;link rel="stylesheet" href="style.css"&gt;</code></p>
                    <p>The stylesheet part is to let the HTML know that we are importing something that should contain CSS.</p>
                </li>
            </ol>
            <p class="text-left mb-4">We do this to keep things tidier, and to not intefere with out HTML. Larger projects may have multiple files, for specific pages, elements and components. 
            </p>
            <p class="text-left mb-4">Try changing a few things on the page using what we've learnt about element selectors and seperating out our CSS into a different file.
            </p>

        
    </page-layout>
</template>
<script>
import PageLayout from '../layouts/PageLayout.vue'
export default {
    components: {
        PageLayout
    }
}
</script>