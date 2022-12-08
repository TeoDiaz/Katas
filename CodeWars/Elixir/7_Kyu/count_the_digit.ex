# Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

defmodule Countdigit do

  def nb_dig(n, d) do
   list = for n <- 0..n, do: n * n
   list = for x <- list, do: Integer.digits(x)
   list = for y <- list, do: Enum.count(y, &(&1 == d))
   Enum.sum(list)
  end

end
