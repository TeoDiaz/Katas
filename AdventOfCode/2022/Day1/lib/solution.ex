defmodule Solution do
  def part1(input) do
    input
    |> sum_calories()
    |> Enum.max()
  end

  def part2(input) do
    input
    |> sum_calories()
    |> Enum.sort(&(&1 >= &2))
    |> Enum.take(3)
    |> Enum.sum()
  end

  defp sum_calories(input) do
    input
    |> String.split("\n\n")
    |> Enum.map(fn x ->
      String.split(x, "\n", trim: true) |> Enum.map(&String.to_integer/1) |> Enum.sum()
    end)
  end
end
