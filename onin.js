$(document).ready(function() {
    
    // 1. View More Toggle
    $('#toggleMoreBtn').on('click', function() {
        $('#moreAbout').toggleClass('hidden');
        $(this).text($(this).text() === 'View More' ? 'View Less' : 'View More');
    });

    // 2. Skill Adder
    $('#addSkillBtn').on('click', function() {
        const skillInput = $('#newSkillInput');
        const skillValue = skillInput.val().trim();
        
        if (skillValue !== "") {
            const newSkillLi = $('<li>').text(skillValue);
            $('#skillsList').append(newSkillLi);
            skillInput.val(""); // Clear the input
        }
    });

    // 3. Clear Form
    $('#clearFormBtn').on('click', function() {
        if(confirm("Clear all text in the contact form?")) {
            $('#contactForm')[0].reset();
            $('#formFeedback').text("");
        }
    });

    // 4. Download Alert Simulation
    $('#downloadBtn').on('click', function() {
        alert("Preparing your resume file for download...");
    });

    // 5. Scroll to Top logic
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });

    $('#scrollTopBtn').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    // 6. Form Submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        $('#formFeedback').text("Message sent! I'll get back to you soon.").css('color', 'green');
        this.reset();
    });
});