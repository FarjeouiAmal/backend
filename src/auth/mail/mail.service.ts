import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { resetTemplate } from './templates/password-reset';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  constructor(private readonly mailerService: MailerService) {}

  async sendPasswordResetEmail(to: string, resetLink: string): Promise<void> {
    try {
      const html = resetTemplate(resetLink); // Assuming resetTemplate function generates HTML content for the email
      await this.mailerService.sendMail({
        to,
        subject: 'Password Reset',
        html,
      });
      this.logger.log(`Password reset email sent to ${to}`);
    } catch (error) {
      this.logger.error(`Failed to send password reset email to ${to}: ${error.message}`);
      throw new Error('Failed to send password reset email');
    }
  }
}
