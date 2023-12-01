defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "part 1 with example" do
    # Example Solution
    assert Solution.part1(example()) == 142
  end

  test "part 1 with input data" do
    # Solution
    assert Solution.part1(input()) == 55971
  end

  test "part 2 with example" do
    # Example Solution
    assert Solution.part2(example_2()) == 281
  end

  test "part 2 with input data" do
    # Solution
    assert Solution.part2(input()) == 54719
  end

  defp example() do
    """
    1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet
    """
    |> String.split("\n", trim: true)
  end

  defp example_2() do
    """
    two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen
    """
    |> String.split("\n", trim: true)
  end

  defp input() do
    File.read!("day1.txt")
    |> String.split("\n", trim: true)
  end
end
