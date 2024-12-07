defmodule Solution do
  def part1(input) do
    # Build the matrix (map of coordinates and characters)
    matrix = input |> build_matrix()

    # Convert matrix to list and filter for coordinates where 'X' is found, then search for "XMAS"
    matrix
    # Convert the matrix to a list of tuples {coords, value}
    |> Enum.to_list()
    # Filter for 'X' locations
    |> Enum.filter(fn {_, v} -> v == "X" end)
    # Search for "XMAS" starting from each "X" coordinate
    |> find_xmas(matrix)
  end

  # Find all matches of "XMAS" starting from each "X" in the grid
  def find_xmas(xs, matrix) do
    Enum.reduce(xs, [], fn {x_coords, _}, acc ->
      # For each 'X' coordinate, find matches in all 8 directions (up, down, left, right, diagonals)
      acc ++
        [
          # Check upwards
          find_next(x_coords, :up, ["M", "A", "S"], matrix),
          # Check downwards
          find_next(x_coords, :down, ["M", "A", "S"], matrix),
          # Check leftwards
          find_next(x_coords, :left, ["M", "A", "S"], matrix),
          # Check rightwards
          find_next(x_coords, :right, ["M", "A", "S"], matrix),
          # Diagonal top-right
          find_next(x_coords, :diag_up_right, ["M", "A", "S"], matrix),
          # Diagonal bottom-right
          find_next(x_coords, :diag_down_right, ["M", "A", "S"], matrix),
          # Diagonal top-left
          find_next(x_coords, :diag_up_left, ["M", "A", "S"], matrix),
          # Diagonal bottom-left
          find_next(x_coords, :diag_down_left, ["M", "A", "S"], matrix)
        ]
    end)
    # Filter only successful "XMAS" matches (value 1)
    |> Enum.filter(&(&1 == 1))
    # Return the total number of "XMAS" matches
    |> Enum.count()
  end

  # Base case for recursion: If all letters in "XMAS" are found, return 1
  def find_next(_, _, [], _), do: 1

  # Recursive function to check the next letter in the sequence
  def find_next({current_x, current_y}, direction, [next_letter | tail], matrix) do
    # Get the coordinates of the next character in the given direction
    next_coords = get_next_coord({current_x, current_y}, direction)
    next_match = Map.get(matrix, next_coords)

    # If the next letter matches, continue searching for the next letter in the sequence
    if next_letter == next_match do
      find_next(next_coords, direction, tail, matrix)
    else
      # If the match fails, return 0 (no match)
      0
    end
  end

  # Pad the grid with "." around the edges for boundary checking
  def pad_grid(problem) do
    # Take the first row to determine the width
    [first | _] = problem
    width = String.length(first)
    # Create a row of "." for padding
    pad_row = 1..width |> Enum.map(fn _ -> "." end) |> Enum.join()
    # Add padding to all rows
    [pad_row] ++ Enum.map(problem, &".#{&1}.") ++ [pad_row]
  end

  # Build a matrix from the grid (convert grid to a map with coordinates as keys)
  def build_matrix(grid) do
    # For each row with its index
    Enum.with_index(grid)
    # Accumulate the matrix
    |> Enum.reduce(%{}, fn row, acc -> build_matrix_row(row, acc) end)
  end

  # Build a matrix row: map each character in the row to its (x, y) coordinates
  def build_matrix_row({row, row_index}, acc) do
    row
    # Convert the row string into individual characters
    |> String.graphemes()
    # Get the column index for each character
    |> Enum.with_index()
    |> Enum.reduce(acc, fn {char, col_index}, acc ->
      # Add the character with its (x, y) coordinate to the map
      Map.put(acc, {col_index, row_index}, char)
    end)
  end

  # Get the next coordinate based on the direction
  def get_next_coord({current_x, current_y}, direction) do
    case direction do
      # Move up
      :up -> {current_x, current_y - 1}
      # Move down
      :down -> {current_x, current_y + 1}
      # Move left
      :left -> {current_x - 1, current_y}
      # Move right
      :right -> {current_x + 1, current_y}
      # Diagonal top-right
      :diag_up_right -> {current_x + 1, current_y - 1}
      # Diagonal bottom-right
      :diag_down_right -> {current_x + 1, current_y + 1}
      # Diagonal top-left
      :diag_up_left -> {current_x - 1, current_y - 1}
      # Diagonal bottom-left
      :diag_down_left -> {current_x - 1, current_y + 1}
    end
  end

  def part2(input) do
    matrix = input |> build_matrix()
    matrix |> Enum.to_list() |> Enum.filter(fn {_, v} -> v == "A" end) |> find_x_mases(matrix)
  end

  def find_x_mases(as, matrix) do
    Enum.reduce(as, [], fn a, acc ->
      acc ++ [find_x_mas(a, matrix)]
    end)
    |> Enum.filter(& &1)
    |> Enum.count()
  end

  def find_x_mas({{coord_x, coord_y}, _}, matrix) do
    cross_1 =
      [
        Map.get(matrix, {coord_x - 1, coord_y - 1}),
        Map.get(matrix, {coord_x, coord_y}),
        Map.get(matrix, {coord_x + 1, coord_y + 1})
      ]
      |> Enum.filter(& &1)
      |> List.to_string()

    cross_2 =
      [
        Map.get(matrix, {coord_x + 1, coord_y - 1}),
        Map.get(matrix, {coord_x, coord_y}),
        Map.get(matrix, {coord_x - 1, coord_y + 1})
      ]
      |> Enum.filter(& &1)
      |> List.to_string()

    cross_1 in ["MAS", "SAM"] && cross_2 in ["MAS", "SAM"]
  end
end
