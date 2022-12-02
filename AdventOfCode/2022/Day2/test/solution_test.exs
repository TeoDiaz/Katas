defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "part 1 with example" do
    # Example Solution
    assert Solution.part1(example()) == 15
  end

  test "part 1 with input data" do
    # Solution
    assert Solution.part1(input()) == 10310
  end

  test "part 2 with example" do
    # Example Solution
    assert Solution.part2(example()) == 12
  end

  test "part 2 with input data" do
    # Solution
    assert Solution.part2(input()) == 14859
  end

  defp example() do
    """
    A Y
    B X
    C Z
    """
    |> String.split("\n", trim: true)
  end

  defp input() do
    File.read!("day2.txt")
    |> String.split("\n", trim: true)
  end
end
