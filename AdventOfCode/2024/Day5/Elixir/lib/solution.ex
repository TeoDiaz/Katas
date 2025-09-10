defmodule Solution do
  def part1([numbers, inputs]) do
    numbers = String.split(numbers, "\n", trim: true)
    inputs = String.split(inputs, "\n", trim: true)

    Enum.map(numbers, fn num ->
      orders = String.split(num, "|")

      Enum.map(inputs, fn input ->
        evaluate(orders, input) |> IO.inspect()
      end)
    end)
  end

  def evaluate(rule, input) do
    IO.inspect(rule)
    IO.inspect(input)
    index1 = Enum.find_index(input, &(&1 == Enum.at(rule, 0)))
    index2 = Enum.find_index(input, &(&1 == Enum.at(rule, 1)))

    cond do
      index1 != nil and index2 != nil and index1 > index2 ->
        {false, index1, index2}

      true ->
        {true, index1, index2}
    end
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
