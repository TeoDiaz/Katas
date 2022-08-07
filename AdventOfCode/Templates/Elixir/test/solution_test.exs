defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "part 1 with example" do
    assert Solution.part1(example()) == "" # Example Solution
  end

  test "part 1 with input data" do
    assert Solution.part1(input()) == "" # Solution
  end

  test "part 2 with example" do
    assert Solution.part2(example()) == "" # Example Solution
  end

  test "part 2 with input data" do
    assert Solution.part2(input()) == "" # Solution
  end

  defp example() do
    """
    """
    |> String.split("\n", trim: true)
  end

  defp input() do
    File.read!("dayXX.txt")
    |> String.split("\n", trim: true)
  end
end
