import type { PrismaClient } from "@prisma/client";
import type {
  Adapter,
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters";

export function PrismaAdapter(prisma: PrismaClient): Adapter {
  return {
    createUser: (data: Omit<AdapterUser, "id">) => prisma.user.create({ data }),
    getUser: (id: string) => prisma.user.findUnique({ where: { id } }),
    getUserByEmail: (email: string) =>
      prisma.user.findUnique({ where: { email } }),
    async getUserByAccount(provider_providerAccountId: {
      provider: string;
      providerAccountId: string;
    }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId,
        },
        select: { user: true },
      });
      return account?.user ?? null;
    },
    updateUser: ({ id, ...data }: Partial<AdapterUser> & { id: string }) =>
      prisma.user.update({ where: { id }, data }),
    deleteUser: (id: string) => prisma.user.delete({ where: { id } }),
    linkAccount: (data: AdapterAccount) =>
      prisma.account.create({ data }) as unknown as AdapterAccount,
    unlinkAccount: (provider_providerAccountId: {
      provider: string;
      providerAccountId: string;
    }) =>
      prisma.account.delete({
        where: { provider_providerAccountId },
      }) as unknown as AdapterAccount,
    async getSessionAndUser(sessionToken: string) {
      const userAndSession = await prisma.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });
      if (!userAndSession) return null;
      const { user, ...session } = userAndSession;
      return { user, session };
    },
    createSession: (data: AdapterSession) => prisma.session.create({ data }),
    updateSession: (data: Partial<AdapterSession> & { sessionToken: string }) =>
      prisma.session.update({
        where: { sessionToken: data.sessionToken },
        data,
      }),
    deleteSession: (sessionToken: string) =>
      prisma.session.delete({ where: { sessionToken } }),
    createVerificationToken: (data: VerificationToken) =>
      prisma.verificationToken.create({ data }),
    useVerificationToken: (identifier_token: {
      identifier: string;
      token: string;
    }) => {
      return prisma.verificationToken.delete({
        where: { identifier_token },
      });
    },
  };
}
