defmodule Solution do
  def part1(input) do
    input
    |> Enum.map(&String.split(&1, " "))
    |> Enum.count(&is_safe?/1)
  end

  def part2(input) do
    input
    |> Enum.map(&String.split(&1, " "))
    |> Enum.count(fn levels ->
      levels = Enum.map(levels, &String.to_integer/1)
      is_safe_part_2?(levels)
    end)
  end

  defp is_safe?(levels) do
    levels = Enum.map(levels, &String.to_integer/1)

    asc_sorted = Enum.sort(levels)
    desc_sorted = Enum.sort(levels, :desc)

    if asc_sorted == levels or desc_sorted == levels do
      levels
      |> Enum.chunk_every(2, 1, :discard)
      |> Enum.all?(fn [a, b] -> abs(a - b) >= 1 && abs(a - b) <= 3 end)
    else
      false
    end
  end

  defp is_safe_part_2?(levels, index \\ -1) do
    if index >= length(levels) do
      false
    else
      sliced_levels =
        if index >= 0 do
          List.delete_at(levels, index)
        else
          levels
        end

      asc_sorted = Enum.sort(sliced_levels)
      desc_sorted = Enum.sort(sliced_levels, :desc)

      result =
        if asc_sorted == sliced_levels or desc_sorted == sliced_levels do
          sliced_levels
          |> Enum.chunk_every(2, 1, :discard)
          |> Enum.all?(fn [a, b] -> abs(a - b) >= 1 && abs(a - b) <= 3 end)
        else
          false
        end

      if result do
        true
      else
        is_safe_part_2?(levels, index + 1)
      end
    end
  end
end
