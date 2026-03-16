import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("area of a circle with radius 5 is roughly 78.54", () => {
  // Given
  const circle = new Circle(new Point2D(0, 0), 5);

  // When
  const actual = circle.area();

  // Then
  assertAlmostEquals(actual, 78.54, 0.01);
});

Deno.test("diameter of a circle with radius 5 is 10", () => {
  // Given
  const circle = new Circle(new Point2D(0, 0), 5);

  // When
  const actual = circle.diameter();

  // Then
  assertEquals(actual, 10);
});

Deno.test("distance from (0,0) to (3,4) is 5", () => {
  // Given
  const a = new Point2D(0, 0);
  const b = new Point2D(3, 4);

  // When
  const actual = a.distanceTo(b);

  // Then
  assertEquals(actual, 5);
});

Deno.test("area of rectangle (0,0)-(4,3) is 12", () => {
  // Given
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));

  // When
  const actual = rect.area();

  // Then
  assertEquals(actual, 12);
});

Deno.test("circumference of rectangle (0,0)-(4,3) is 20", () => {
  // Given
  // width=4, height=3 → 2*(4 + 2*3) = 20
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));

  // When
  const actual = rect.circumference();

  // Then
  assertEquals(actual, 20);
});

Deno.test("diagonal of rectangle (0,0)-(4,3) is 5", () => {
  // Given
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));

  // When
  const actual = rect.diagonal();

  // Then
  assertEquals(actual, 5);
});
