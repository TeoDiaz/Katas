defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "part 1 with example" do
    assert Solution.part1(example()) == 11 # Example Solution
  end

  test "part 1 with input data" do
    assert Solution.part1(input()) == 1660292 # Solution
  end

  test "part 2 with example" do
    assert Solution.part2(example()) == 31 # Example Solution
  end

  test "part 2 with input data" do
    assert Solution.part2(input()) == 22776016 # Solution
  end

  defp example() do
    """
    3   4
    4   3
    2   5
    1   3
    3   9
    3   3
    """
    |> String.split("\n", trim: true)
  end

  defp input() do
    File.read!("day1.txt")
    |> String.split("\n", trim: true)
  end
end
