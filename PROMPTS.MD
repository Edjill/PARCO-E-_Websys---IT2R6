AI Interaction Log - Edjill D. Parco
Entry #1 Tool Used: Gemini
Prompt (copy-paste exactly): how do i change the font of my name into times new roman 
AI Output (summary or screenshot reference): The AI provided the CSS selector for h1 and explained how to set the font-family to 'Times New Roman', Times, serif with font-weight: bold. It also updated the entire CSS file to ensure the header layout remained aligned after the font change.
How I used it in my project: I applied this to my Hero section. It made my name, "Edjill D. Parco," stand out with a professional and classic look that contrasts well with the modern Arial font used in the rest of the body text.

Entry #2 Tool Used: Gemini
Prompt (copy-paste exactly): How do I make a "View More" toggle for my About section using jQuery?
AI Output (summary or screenshot reference): The AI suggested using a button with an ID and a hidden div. It provided jQuery logic using .on('click', ...) and .toggleClass('hidden'). It also showed how to use a ternary operator to switch the button text between "View More" and "View Less."
How I used it in my project: I used this as a guide for me to implement this in my Profile card. It keeps the initial view clean by hiding the secondary paragraph of my bio, allowing users to expand the text only if they want to read more details about my focus on front-end development.

Entry #3 Tool Used: Gemini
Prompt (copy-paste exactly): what query should i use to add skills that allows me to add skills for my interactive resume
AI Output (summary or screenshot reference): The AI provided a snippet containing an HTML input and button group. For the logic, it used jQuery’s .val() to capture the user's typing and .append() to create a new <li> element inside the existing #skillsList without a page refresh.
How I used/modified it in my project: I used this for my Expertise section. I added the input field styled to match my navy blue theme. Now, visitors (or myself during a demo) can type a new skill and watch it appear instantly as a styled tag in the list.

Entry #4 Tool Used: Gemini
Prompt (copy-paste exactly): How do I create a floating "Back to Top" button that only appears when I scroll down?
AI Output (summary or screenshot reference): The AI recommended using a fixed-position button in CSS. In JavaScript/jQuery, it used the $(window).scroll() event combined with .fadeIn() and .fadeOut() based on the scrollTop() value. It also provided the .animate({ scrollTop: 0 }) logic for a smooth return to the top.
How I used/modified it in my project: I added this to the bottom of my index.html. It improves the UX of my site significantly; once a user scrolls past the "Background" section, the arrow appears, allowing them to jump back to the navigation menu instantly.

Entry #5 Tool Used: Gemini
Prompt (copy-paste exactly): Make a contact form validation in jQuery that clears the form and shows a success message.
AI Output (summary or screenshot reference): The AI showed how to use .on('submit', ...) with e.preventDefault() to stop the page from reloading. It provided code to change the text of a feedback paragraph to "Message sent!" in green and used this.reset() to clear the input fields.
How I used/modified it in my project: I applied this to my "Get In Touch" card. I also added a "Clear Form" button with a confirm() popup based on a suggestion from the AI to prevent accidental deletions, ensuring the form is both interactive and safe to use.

