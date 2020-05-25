"""
The function is not returning the correct values. Can you figure out why?

getPlanetName(3); // should return 'Earth'
"""

defmodule Kata do

  @planetNames ~w{Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune}

  def getPlanetName(n) do
    Enum.at(@planetNames, n-1)
  end
  
  def getPlanetName(_id), do: "no such planet"

end

# Other Solutions

defmodule Kata do

  @planetNames ~w{Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune}

  def getPlanetName(n), do: Enum.at @planetNames, n-1, "no such planet"
end

# - - -

defmodule Kata do
  
  def getPlanetName(id) do
    planetNames = %{0 => "Sun",  1=>"Mercury", 2=>"Venus", 3=>"Earth", 4=>"Mars", 5=>"Jupiter", 6=>"Saturn", 7=>"Uranus", 8=>"Neptune"};
    planetNames[id]
  end
  
end