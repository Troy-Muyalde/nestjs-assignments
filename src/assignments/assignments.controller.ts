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

  @Get('prime/:number')
  checkPrime(@Param('number') number: string): { isPrime: boolean } {
    const num = parseInt(number, 10);
    const isPrime = this.isPrime(num);
    return { isPrime };
  }

  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
}