defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "part 1 with example" do
    # Example Solution
    assert Solution.part1(example_1()) == 161
  end

  test "part 1 with input data" do
    # Solution
    assert Solution.part1(input()) == 166_905_464
  end

  test "part 2 with example" do
    # Example Solution
    assert Solution.part2(example_2()) == 48
  end

  test "part 2 with input data" do
    # Solution
    assert Solution.part2(input()) == 72_948_684
  end

  defp example_1() do
    "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"
  end

  defp example_2() do
    "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
  end

  defp input() do
    File.read!("day3.txt")
  end
end
