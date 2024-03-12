document.addEventListener('DOMContentLoaded', function () {
    const speakBtn = document.getElementById('speak-btn');
    const textToSpeech = document.getElementById('text-to-speech');

    // Function to convert text to speech
    function textToSpeechHandler() {
        const text = textToSpeech.value.trim();
        if (text !== '') {
            // Using Web Speech API to speak the text
            const speech = new SpeechSynthesisUtterance();
            speech.text = text;
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            window.speechSynthesis.speak(speech);
        }
    }

    // Event listener for the Speak button
    speakBtn.addEventListener('click', textToSpeechHandler);
});
