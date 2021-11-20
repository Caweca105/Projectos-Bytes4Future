#include <iostream>

int main() {
  int gryffindor = 0, hufflepuff = 0, ravenclaw = 0, slytherin = 0;

  int answer1, answer2, answer3, answer4;

  std::cout << "The Sorting Hat Quiz!\n";

  std::cout << "Q1) When I'm dead, I want people to remember me as:\n\n";

  std::cout << "1) The Good\n";
  std::cout << "2) The Great\n";
  std::cout << "3) The Wise\n";
  std::cout << "4) The Bold\n";

  std::cin >> answer1;

  if (answer1 == 1) {
    hufflepuff += 1;
  } else if ( answer1 == 2) {
    slytherin += 1;
  } else if ( answer1 == 3) {
    ravenclaw += 1;
  } else if ( answer1 == 4) {
    gryffindor += 1;
  } else {
    std::cout << "Invalid input";
  }

  std::cout << "Q2) Dawn or Dusk:\n\n";

  std::cout << "1) Dawn\n";
  std::cout << "2) Dusk\n";

  std::cin >> answer2;

  if (answer2 == 1) {
    gryffindor ++;
    ravenclaw ++;
  } else if (answer2 == 2) {
    hufflepuff ++;
    slytherin ++;
  } else {
    std::cout << "Invalid input";
  }

  std::cout << "Q3) Which kind of instrument most pleases your ear?\n\n";

  std::cout << "1) The violin\n";
  std::cout << "2) The trumpet\n";
  std::cout << "3) The piano\n";
  std::cout << "4) The drum\n";

  std::cin >> answer3;

  if (answer3 == 1) {
    slytherin++;
  } else if (answer3 == 2) {
    hufflepuff++;
  } else if (answer3 == 3) {
    ravenclaw++;
  } else if (answer3 == 4) {
    gryffindor++;
  } else {
    std::cout << "Invalid input";
  }

  std::cout << "Q4) Which road tempts you most?\n\n";

  std::cout << "1) The wide, sunny grassy lane\n";
  std::cout << "2) The narrow, dark, lantern-lit alley\n";
  std::cout << "3) The twisting, leaf-strewn path through woods\n";
  std::cout << "4) The cobbled street lined (ancient buildings)\n";

  std::cin >> answer4;

  if (answer4 == 1) {
    hufflepuff++;
  } else if (answer3 == 2) {
    slytherin++;
  } else if (answer3 == 3) {
    gryffindor++;
  } else if (answer3 == 4) {
    ravenclaw++;
  } else {
    std::cout << "Invalid input";
  }

  int max = 0;
  std::string house;

  if (gryffindor > max) {
    max = gryffindor;
    house = "Gryffindor";
  }

  if (hufflepuff > max) {
    max = hufflepuff;
    house = "hufflepuff";
  }

  if (ravenclaw > max) {
    max = ravenclaw;
    house = "ravenclaw";
  }

  if (slytherin > max) {
    max = slytherin;
    house = "slytherin";
  }

  std::cout << "Your Hogwarts house is " << house << "!\n";
  return 0;

}