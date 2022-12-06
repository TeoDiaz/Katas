defmodule SolutionTest do
  use ExUnit.Case
  doctest Solution

  test "part 1 with example" do
    assert Solution.solution(example(), 4) == 7 # Example Solution
  end

  test "part 1 with input data" do
    assert Solution.solution(input(), 4) == 1876 # Solution
  end

  test "part 2 with input data" do
    assert Solution.solution(input(), 14) == 2202 # Solution
  end

  defp example() do
    """
    mjqjpqmgbljsphdztnvjfqwrcgsmlb
    """
  end

  defp input() do
    File.read!("../day6.txt")
  end
end
