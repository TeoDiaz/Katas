defmodule Solution do
  @values %{
    A: %{X: :draw, Y: :win, Z: :loss},
    B: %{X: :loss, Y: :draw, Z: :win},
    C: %{X: :win, Y: :loss, Z: :draw},
    X: 1,
    Y: 2,
    Z: 3,
    win: 6,
    loss: 0,
    draw: 3
  }

  @part2 %{
    X: :loss,
    Y: :draw,
    Z: :win,
    A: %{draw: :X, win: :Y, loss: :Z},
    B: %{loss: :X, draw: :Y, win: :Z},
    C: %{win: :X, loss: :Y, draw: :Z}
  }

  def part1(input) do
    input
    |> Enum.map(fn game ->
      [oponent, me] = String.split(game, " ")

      fetch_result(oponent, me) |> result_points() |> sum_points(me, :part_1)
    end)
    |> Enum.sum()
  end

  def part2(input) do
    input
    |> Enum.map(fn game ->
      [oponent, me] = String.split(game, " ")

      result = fetch_result(me)
      move = @part2 |> Map.get(String.to_atom(oponent)) |> Map.get(result)

      sum_points(result, move, :part_2)
    end)
    |> Enum.sum()
  end

  defp fetch_result(oponent, me) do
    @values
    |> Map.get(String.to_atom(oponent))
    |> Map.get(String.to_atom(me))
  end

  defp fetch_result(me) do
    @part2
    |> Map.get(String.to_atom(me))
  end

  defp result_points(result) do
    @values |> Map.get(result)
  end

  defp sum_points(result, me, :part_1) do
    points = @values |> Map.get(String.to_atom(me))
    points + result
  end

  defp sum_points(result, me, :part_2) do
    my_points = @values |> Map.get(me)
    result_points = @values |> Map.get(result)

    my_points + result_points
  end
end
