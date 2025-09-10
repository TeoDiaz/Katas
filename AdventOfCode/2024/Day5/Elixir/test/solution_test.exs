defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "part 1 with example" do
    # Example Solution
    assert Solution.part1(example()) == 143
  end

  test "part 1 with input data" do
    # Solution
    assert Solution.part1(input()) == ""
  end

  test "part 2 with example" do
    # Example Solution
    assert Solution.part2(example()) == ""
  end

  test "part 2 with input data" do
    # Solution
    assert Solution.part2(input()) == ""
  end

  defp example() do
    """
    47|53
    97|13
    97|61
    97|47
    75|29
    61|13
    75|53
    29|13
    97|29
    53|29
    61|53
    97|53
    61|29
    47|13
    75|47
    97|75
    47|61
    75|61
    47|29
    75|13
    53|13

    75,47,61,53,29
    97,61,53,29,13
    75,29,13
    75,97,47,61,53
    61,13,29
    97,13,75,29,47
    """
    |> String.split("\n\n")
  end

  defp input() do
    File.read!("day5.txt")
    |> String.split("\n", trim: true)
  end
end
