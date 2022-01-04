#include <iostream>

int main() {
  
  int dog_age = 3;

  int early_years = 21; 
  int later_years = (dog_age - 2) * 4; 
  int human_years = early_years + later_years;
  
  std::cout << "My name is Lucy! Ruff ruff, I am " << human_years << " years old in human years.\n";
}