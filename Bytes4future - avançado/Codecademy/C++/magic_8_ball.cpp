#include <iostream>
#include <cstdlib>

int main() {
  std::cout << "MAGIC 8-BALL:\n\n";

  srand(time(NULL));

  int answer = std::rand() % 10;

  

  if (answer == 0) {
    std::cout << "It is certain.\n";
  } else if (answer == 1) {
    std::cout << "Somehow.\n";
  } else if (answer == 2) {
    std::cout << "Something.\n";
  } else if (answer == 3) {
    std::cout << "Sure.\n";
  } else if (answer == 4) {
    std::cout << "Probably.\n";
  } else if (answer == 5) {
    std::cout << "Are you sure?\n";
  } else if (answer == 6) {
    std::cout << "Yes.\n";
  } else if (answer == 7) {
    std::cout << "No.\n";
  } else if (answer == 8) {
    std::cout << "Certainly.\n";
  } else {
    std::cout << "Very doubtful.\n";
  }


}