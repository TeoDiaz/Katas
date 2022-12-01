defmodule Solution do
  def part1(input) do
    parse(input)
  end

  def part2(input) do
    parse(input)
  end

  defp parse(input) do
    Enum.map(input, fn line ->
      {:ok, term} = Code.string_to_quoted(line)
      term
    end)
  end
end
