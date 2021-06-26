class ConnectFour:
    
    def __init__(self, number_of_rows):
        self.number_of_columns = 10
        self.number_of_rows = number_of_rows
        self.moves = []
    
    def print_game(self):
        # Prints the game to the console.
        
        print("+"+"-"*self.number_of_columns+"+")
        
        for r in reversed(range(self.number_of_rows)):
            print("|", end="")
            
            for c in range(self.number_of_columns):
                print(self.get_cell_value(c, r), end="")
            
            print("|")
        
        print("+"+"-"*self.number_of_columns+"+")
        
        print("|", end="")
        for c in range(self.number_of_columns):
            print(str(c), end="")
        print("|")
       
    def get_cell_value(self, column, row):
        # Returns 'X' if a cross has been placed in the cell with the given coordinates.
        # Returns 'O' if a circle has been placed in the cell with the given coordinates.
        # Returns ' ' otherwise.
        row_counter = 0
        for move in self.moves:
            if move["column"] == column:
                if row_counter == row:
                    return move["player"]
                row_counter += 1
        return " "
    
    def make_move(self, column):
        # Adds a new move to the game with the information in the parameters.
        if self.get_winner() != " ":
            print("ERROR: CAN'T MAKE MOVE BECAUSE THERE ALREADY IS A WINNER.")
            return
        
        self.moves.append({
            'column': column,
            'player': self.get_next_players_turn()
        })
    
    def does_column_exist(self, column):
        # Returns True if the game contains a column with the given coordinate.
        # Returns False otherwise.
        return (0 <= column and column < self.number_of_columns)
    
    def is_column_full(self, column):
        # Returns True if the column at the given coordinate is full.
        # Returns False otherwise.
        return self.get_cell_value(column, self.number_of_rows-1) != " "
    
    def get_next_players_turn(self):
        # Returns 'X' if a cross should be placed on the board next.
        # Returns 'O' if a circle should be placed on the board next.
        if len(self.moves) == 0:
            return "X"
        elif self.moves[-1]["player"] == "O":
            return "X"
        else:
            return "O"
    
    def get_winner(self):
        # Returns 'X' if 5 crosses in a row is found in the game.
        # Returns 'O' if 5 circles in a row is found in the game.
        # Returns ' ' otherwise.
        
        if len(self.moves) == 0:
            return ' '
        
        # Compute coordinates for the last move.
        last_move = self.moves[-1]
        last_move_player = last_move["player"]
        last_move_column = last_move["column"]
        last_move_row = -1
        for r in reversed(range(self.number_of_rows)):
            if self.get_cell_value(last_move_column, r) != " ":
                last_move_row = r
                break
        
        def get_winner_horizontal():
            
            counter = 1
            
            # Count left.
            for c in range(last_move_column-1, last_move_column-4, -1):
                if self.get_cell_value(c, last_move_row) == last_move_player:
                    counter += 1
                else:
                    break
            
            # Count right.
            for c in range(last_move_column+1, last_move_column+4):
                if self.get_cell_value(c, last_move_row) == last_move_player:
                    counter += 1
                else:
                    break
            
            return last_move_player if 4 <= counter else " "
        
        def get_winner_vertical():
            
            counter = 1
            
            # Count down.
            for r in range(last_move_row-1, last_move_row-4, -1):
                if self.get_cell_value(last_move_column, r) == last_move_player:
                    counter += 1
                else:
                    break
            
            return last_move_player if 4 <= counter else " "
            
        def get_winner_north_east():
            
            counter = 1
            
            # Count north east.
            for i in range(1, 4):
                if self.get_cell_value(last_move_column+i, last_move_row+i) == last_move_player:
                    counter += 1
                else:
                    break
            
            # Count south west.
            for i in range(1, 4):
                if self.get_cell_value(last_move_column-i, last_move_row-i) == last_move_player:
                    counter += 1
                else:
                    break
            
            return last_move_player if 4 <= counter else " "
            
        def get_winner_north_west():
            
            counter = 1
            
            # Count north west.
            for i in range(1, 4):
                if self.get_cell_value(last_move_column-i, last_move_row+i) == last_move_player:
                    counter += 1
                else:
                    break
            
            # Count south east.
            for i in range(1, 4):
                if self.get_cell_value(last_move_column+i, last_move_row-i) == last_move_player:
                    counter += 1
                else:
                    break
            
            return last_move_player if 4 <= counter else " "
        
        if get_winner_horizontal() != " ":
            return get_winner_horizontal()
        
        if get_winner_vertical() != " ":
            return get_winner_vertical()
        
        if get_winner_north_east() != " ":
            return get_winner_north_east()
        
        return get_winner_north_west()
