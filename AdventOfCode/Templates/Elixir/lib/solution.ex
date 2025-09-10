defmodule Solution do
  def part1(input) do
    coins = [442,295,365,485]
    coins = Enum.sort(coins, :desc)
    amount = 8091

    result = 0

    result =
      Enum.reduce(coins, %{sum: 0, count: 0}, fn coin, acc ->
        if acc.sum != amount do
          calculate_coins(amount, acc, coin)
        else
          acc
        end
      end)

    if result.sum != amount, do: -1, else: result.count
  end

  def calculate_coins(amount, acc, coin) do
    IO.inspect(acc, label: "acc")
    IO.inspect(coin, label: "coin")
    IO.inspect(amount, label: "amount")
    result = acc.sum + coin
    IO.inspect(result, label: "result")
    cond do
      result > amount ->
        IO.inspect("result > amoun")
        %{sum: acc.sum, count: acc.count}

      result == amount ->
        IO.inspect("result == amount")
        %{sum: acc.sum + coin, count: acc.count + 1}

      true ->
        acc = %{sum: acc.sum + coin, count: acc.count + 1}
        calculate_coins(amount, acc, coin)
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
