import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  const fraction = new Fraction(1, 1);

  const float = fraction.toFloat(0.1);

  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  const fraction = new Fraction(2, 3);

  const float = fraction.toFloat(0.01);

  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  const result = left.add(right);

  assertAlmostEquals(result.toFloat(0.01), 0.67);
  assertEquals(left.toString(), "1/3"); 
});

Deno.test("3/4 - 1/4 = 0.5", () => {
  const left = new Fraction(3, 4);
  const right = new Fraction(1, 4);

  const result = left.subtract(right);

  assertEquals(result.toFloat(0.01), 0.5);
  assertEquals(left.toString(), "3/4");

Deno.test("2/3 * 3/4 = 0.5", () => {
  const left = new Fraction(2, 3);
  const right = new Fraction(3, 4);

  const result = left.multiply(right);

  assertEquals(result.toFloat(0.01), 0.5);
  assertEquals(left.toString(), "2/3"); 
});

Deno.test("1/2 / 1/4 = 2.0", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 4);

 
  const result = left.divide(right);

  
  assertEquals(result.toFloat(0.1), 2.0);
  assertEquals(left.toString(), "1/2"); 
});

Deno.test("toString of 3/4 is '3/4'", () => {
  
  const fraction = new Fraction(3, 4);

  
  assertEquals(fraction.toString(), "3/4");
});

Deno.test("Fraction.parse('3/4') yields 0.75", () => {
  
  const fraction = Fraction.parse("3/4");

  
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
});