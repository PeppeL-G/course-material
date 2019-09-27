class HangmanGame:
	
	def __init__(self, correct_word):
		self.correct_word = correct_word
		self.guessed_letters = []
		self.number_of_guesses = 0
		self.max_number_of_guesses = 9
	
	def get_underlined_word(self):
		underlined_word = ""
		for letter in self.correct_word:
			if letter in self.guessed_letters:
				underlined_word += letter
			else:
				underlined_word += "_"
		return underlined_word
	
	def has_player_lost(self):
		return self.number_of_guesses == self.max_number_of_guesses
	
	def has_player_won(self):
		return self.correct_word == self.get_underlined_word()
	
	def make_guess(self, letter):
		
		if self.has_player_lost() or self.has_player_won():
			print("CAN'T make_guess(); PLAYER HAS ALREADY LOST.")
			return
		
		self.number_of_guesses += 1
		if letter not in self.guessed_letters:
			self.guessed_letters.append(letter)