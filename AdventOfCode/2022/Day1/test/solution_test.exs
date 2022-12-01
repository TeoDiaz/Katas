defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "part 1 with example" do
    # Example Solution
    assert Solution.part1(example()) == 24000
  end

  test "part 1 with input data" do
    # Solution
    assert Solution.part1(input()) == 67658
  end

  test "part 2 with example" do
    # Example Solution
    assert Solution.part2(example()) == 45000
  end

  test "part 2 with input data" do
    # Solution
    assert Solution.part2(input()) == 200_158
  end

  defp example() do
    """
    1000
    2000
    3000

    4000

    5000
    6000

    7000
    8000
    9000

    10000
    """
  end

  defp input() do
    File.read!("day1.txt")
  end
end
