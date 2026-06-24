# French Language Tutor & Companion

A fully interactive, single-file French language learning application built with React, Tailwind-style custom CSS, and Web Speech APIs.

## Features
1. **Chat Tutor (CHAT)**: Talk in French to a virtual tutor with browser voice recognition (STT). The tutor replies out loud in French (TTS) with spelling, English translations, phonetic guides, and a dedicated **Mistake Correction Card** that highlights and explains any grammatical errors in your speech.
2. **Alphabet Reference (ALPHABET)**: Tap on any letter or accent to hear its French pronunciation and see an example vocabulary word.
3. **Vocab Flashcards (VOCAB)**: Practice with built-in card decks (Greetings, Food, Travel, Numbers) using a 3D flip animation. Generate custom 10-card decks on-the-spot by typing any topic (e.g. "At the beach").
4. **Sentence Translator (TRANSLATE)**: Translate sentences bidirectionally and view phonetic guides along with a comprehensive **word-by-word grammatical breakdown**.
5. **Stats & Progress Tracking**: Automatically tracks your learning streak and count of learned words using the browser's `localStorage` to save your state across reloads.
6. **Bold & Clean Theme**: Features dynamic CSS effects, glassmorphic layout, a responsive bottom navigation for mobile, and a dark/light mode toggle.

---

## How to Run
Since the application is self-contained as a single React artifact, **no installation or terminal setup is required**:
1. Double-click the [index.html](file:///c:/Users/omar/Documents/French/Language/Tutor/index.html) file to open it in any modern browser (Chrome, Edge, or Safari are recommended for microphone APIs).
2. Start learning immediately using the built-in **Local Simulator** mode (enabled by default).

---

## Configuration & API Keys
To power the app with live, fully-dynamic artificial intelligence:
1. Click the **Gear icon** in the top-right corner to open the Settings panel.
2. Select your AI Engine Provider:
   - **Simulator Mode**: Uses local offline heuristics (no key required).
   - **Gemini API Key**: Recommended. Works directly and safely from your browser without security restrictions.
   - **Claude API Key**: Client-side requests may be blocked by Anthropic's CORS security policies. Running a local CORS proxy or browser extension may be needed to bypass CORS errors.
3. Enter your API key and set your preferred difficulty level (**Beginner**, **Intermediate**, or **Advanced**).
