import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  const result = left.add(right);

  // Assert
  assertAlmostEquals(result.toFloat(0.01), 0.67);
  assertEquals(left.toString(), "1/3"); // original unchanged
});

Deno.test("3/4 - 1/4 = 0.5", () => {
  // Arrange
  const left = new Fraction(3, 4);
  const right = new Fraction(1, 4);

  // Act
  const result = left.subtract(right);

  // Assert
  assertEquals(result.toFloat(0.01), 0.5);
  assertEquals(left.toString(), "3/4"); // original unchanged
});

Deno.test("2/3 * 3/4 = 0.5", () => {
  // Arrange
  const left = new Fraction(2, 3);
  const right = new Fraction(3, 4);

  // Act
  const result = left.multiply(right);

  // Assert
  assertEquals(result.toFloat(0.01), 0.5);
  assertEquals(left.toString(), "2/3"); // original unchanged
});

Deno.test("1/2 / 1/4 = 2.0", () => {
  // Arrange
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 4);

  // Act
  const result = left.divide(right);

  // Assert
  assertEquals(result.toFloat(0.1), 2.0);
  assertEquals(left.toString(), "1/2"); // original unchanged
});

Deno.test("toString of 3/4 is '3/4'", () => {
  // Arrange
  const fraction = new Fraction(3, 4);

  // Act & Assert
  assertEquals(fraction.toString(), "3/4");
});

Deno.test("Fraction.parse('3/4') yields 0.75", () => {
  // Act
  const fraction = Fraction.parse("3/4");

  // Assert
  assertEquals(fraction.toFloat(0.01), 0.75);
});

Deno.test("Fraction.parse without slash throws error", () => {
  assertThrows(
    () => Fraction.parse("3"),
    Error,
    "illegal syntax",
  );
});

Deno.test("Fraction.parse with non-numeric parts throws error", () => {
  assertThrows(
    () => Fraction.parse("a/b"),
    Error,
    "non-numeric",
  );
});

Deno.test("new Fraction with denominator 0 throws error", () => {
  assertThrows(
    () => new Fraction(3, 0),
    Error,
    "denominator must not be zero",
  );
});

Deno.test("Fraction.parse with denominator 0 throws error", () => {
  assertThrows(
    () => Fraction.parse("3/0"),
    Error,
    "denominator must not be zero",
  );
});
