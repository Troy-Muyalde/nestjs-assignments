import { Controller, Get, Param, BadRequestException } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci/:n')
  getFibonacciSequence(@Param('n') n: string): { sequence: number[] } {
    const num = parseInt(n, 10);

    // Validate input
    if (isNaN(num) || num < 0) {
      throw new BadRequestException('Invalid input. Please provide a positive integer.');
    }

    // Calculate Fibonacci sequence
    const sequence = this.calculateFibonacci(num);
    return { sequence };
  }

  private calculateFibonacci(n: number): number[] {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
  }
}