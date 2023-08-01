from fastapi import FastAPI

app = FastAPI()
responses = {
    "hello": "Hello! How can I help you?",
    "how are you": "I'm just a chatbot, but thanks for asking!",
    "bye": "Goodbye! Have a nice day.",
    "default": "I'm sorry, I don't understand that. Can you please rephrase?"
}

def get_response(user_input):
    # Convert the user input to lowercase for case-insensitive matching
    user_input = user_input.lower()

    # Look for matching response or use the default response
    return responses.get(user_input, responses["default"])

def main():
    print("Chatbot: Hello! Type 'bye' to exit.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == "bye":
            print("Chatbot: Goodbye! Have a nice day.")
            break
        response = get_response(user_input)
        print("Chatbot:", response)

if __name__ == "__main__":
    main()
