defmodule Solution do
  def part1(input) do
    {even, odd} =
      input
      |> Enum.flat_map(&String.split(&1, " ", trim: true))
      |> Enum.map(&String.to_integer(&1))
      |> Enum.with_index()
      |> Enum.split_with(fn {_, index} -> rem(index, 2) == 0 end)

    even = even |> Enum.sort_by(fn {value, _} -> value end)
    odd = odd |> Enum.sort_by(fn {value, _} -> value end)

    even
    |> Enum.with_index()
    |> Enum.reduce(0, fn {{value, _}, index}, acc ->
      {odd_num, _} = Enum.at(odd, index)

      diff = value - odd_num

      if diff < 0, do: acc + diff * -1, else: acc + diff
    end)
  end

  def part2(input) do
    {even, odd} =
      input
      |> Enum.flat_map(&String.split(&1, " ", trim: true))
      |> Enum.map(&String.to_integer(&1))
      |> Enum.with_index()
      |> Enum.split_with(fn {_, index} -> rem(index, 2) == 0 end)

    odd = odd |> Enum.group_by(fn {value, _} -> value end)

    even
    |> Enum.map(fn {key, _} ->
      if odd[key] do
        key * length(odd[key])
      else
        0
      end
    end)
    |> Enum.sum()
  end
end
