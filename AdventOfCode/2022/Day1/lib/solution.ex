defmodule Solution do
  def part1(input) do
    Enum.map(input, fn x ->
      String.split(x, "\n", trim: true) |> Enum.map(&String.to_integer/1) |> Enum.sum()
    end)
    |> Enum.max()
  end

  def part2(input) do
    Enum.map(input, fn x ->
      String.split(x, "\n", trim: true) |> Enum.map(&String.to_integer/1) |> Enum.sum()
    end)
    |> Enum.sort(&(&1 >= &2))
    |> Enum.take(3)
    |> Enum.sum()
  end
end
