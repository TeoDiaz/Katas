defmodule Solution do
  def part1(input) do
    pattern = ~r/mul\((\d+),(\d+)\)/
    matches = Regex.scan(pattern, input)

    Enum.map(matches, fn [_, num1, num2] ->
      {String.to_integer(num1), String.to_integer(num2)}
    end)
    |> Enum.map(fn {a, b} -> a * b end)
    |> Enum.sum()
  end

  def part2(input) do
    pattern = ~r/mul\((\d+),(\d+)\)|do\(\)|don't\(\)/
    matches = Regex.scan(pattern, input)

    matches =
      Enum.reduce(matches, {[], false}, fn item, {acc, skip_next} ->
        cond do
          item == ["don't()"] ->
            {acc, true}

          item == ["do()"] ->
            {acc, false}

          skip_next ->
            {acc, true}

          true ->
            {[item | acc], false}
        end
      end)
      |> elem(0)
      |> Enum.flat_map(fn [_, num1, num2] ->
        [String.to_integer(num1) * String.to_integer(num2)]
      end)
      |> Enum.sum()
  end

  defp parse(input) do
    Enum.map(input, fn line ->
      {:ok, term} = Code.string_to_quoted(line)
      term
    end)
  end
end
