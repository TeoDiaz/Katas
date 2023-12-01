defmodule Solution do
  def part1(input) do
    sum =
      Enum.reduce(input, [], fn line, acc ->
        num = line |> String.replace(~r/[^\d]/, "") |> get_num() |> String.to_integer()

        [num | acc]
      end)
      |> Enum.sum()

    sum
  end

  def part2(input) do
    Enum.reduce(input, 0, fn line, acc ->
      %{values: first_value, str: _str} =
        line
        |> replace_string_to_num()

      %{values: second_value, str: _str} =
        line |> String.reverse() |> replace_reverse_string_to_num()

      sum = Integer.to_string(first_value) <> Integer.to_string(second_value)

      acc + String.to_integer(sum)
    end)
  end

  defp parse(input) do
    Enum.map(input, fn line ->
      {:ok, term} = Code.string_to_quoted(line)
      term
    end)
  end

  def get_num(line) when byte_size(line) == 1, do: line <> line
  def get_num(line) when byte_size(line) == 2, do: line

  def get_num(line) do
    [first | rest] = String.split(line, "", trim: true)
    first <> List.last(rest)
  end

  def replace_string_to_num(line) do
    splitted = String.split(line, "", trim: true)

    result =
      Enum.reduce(splitted, %{str: "", values: 0}, fn char, %{str: str, values: values} = acc ->
        new_str = str <> char

        {substr, new_char} =
          new_str |> replace(char)

        if is_integer(new_char) and values == 0 do
          string_to_replace =
            Integer.to_string(new_char)

          %{
            str: String.replace(new_str, string_to_replace, string_to_replace),
            values: new_char
          }
        else
          case is_integer(new_char) do
            true ->
              string_to_replace =
                Integer.to_string(new_char)

              %{
                str: String.replace(new_str, substr, string_to_replace),
                values: values
              }

            _ ->
              %{
                str: String.replace(new_str, substr, new_char),
                values: values
              }
          end
        end
      end)

    result
  end

  def replace_reverse_string_to_num(line) do
    splitted = String.split(line, "", trim: true)

    result =
      Enum.reduce(splitted, %{str: "", values: 0}, fn char, %{str: str, values: values} = acc ->
        new_str = char <> str

        {substr, new_char} = new_str |> replace(char)

        if is_integer(new_char) and values == 0 do
          string_to_replace =
            Integer.to_string(new_char)

          %{
            str: String.replace(new_str, string_to_replace, string_to_replace),
            values: new_char
          }
        else
          case is_integer(new_char) do
            true ->
              string_to_replace =
                Integer.to_string(new_char)

              %{
                str: String.replace(new_str, substr, string_to_replace),
                values: values
              }

            _ ->
              %{
                str: String.replace(new_str, substr, new_char),
                values: values
              }
          end
        end
      end)

    result
  end

  def replace(str, char) do
    case Integer.parse(char) do
      {num, ""} when num < 10 ->
        {Integer.to_string(num), num}

      _ ->
        case Integer.parse(str) do
          {num, ""} when num < 10 ->
            {Integer.to_string(num), num}

          _ ->
            cond do
              String.contains?(str, "one") -> {"one", 1}
              String.contains?(str, "two") -> {"two", 2}
              String.contains?(str, "three") -> {"three", 3}
              String.contains?(str, "four") -> {"four", 4}
              String.contains?(str, "five") -> {"five", 5}
              String.contains?(str, "six") -> {"six", 6}
              String.contains?(str, "seven") -> {"seven", 7}
              String.contains?(str, "eight") -> {"eight", 8}
              String.contains?(str, "nine") -> {"nine", 9}
              true -> {str, str}
            end
        end
    end
  end
end
