defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "part 1 with example" do
    # Example Solution
    assert Solution.part1(example()) == 18
  end

  test "part 1 with input data" do
    # Solution
    assert Solution.part1(input()) == 2504
  end

  test "part 2 with example" do
    # Example Solution
    assert Solution.part2(example()) == 9
  end

  test "part 2 with input data" do
    # Solution
    assert Solution.part2(input()) == ""
  end

  defp example() do
    """
    MMMSXXMASM
    MSAMXMSMSA
    AMXSXMAAMM
    MSAMASMSMX
    XMASAMXAMM
    XXAMMXXAMA
    SMSMSASXSS
    SAXAMASAAA
    MAMMMXMMMM
    MXMXAXMASX
    """
    |> String.split("\n", trim: true)
  end

  defp input() do
    File.read!("day3.txt")
    |> String.split("\n", trim: true)
  end
end
