import { View, Text, SafeAreaView, StatusBar, Linking } from "react-native";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Rocket, Github, Cpu } from "lucide-react-native";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <StatusBar barStyle="light-content" />

      <View className="flex-1 px-8">
        {/* TOP BAR */}
        <View className="flex-row justify-end py-4">
          <Avatar
            size="md"
            className="bg-indigo-600 border-2 border-indigo-400/30"
          >
            <AvatarFallbackText>User</AvatarFallbackText>
            <AvatarImage source={{ uri: "https://github.com/github.png" }} />
          </Avatar>
        </View>

        {/* HERO SECTION */}
        <VStack className="mt-8 items-center">
          <View className="bg-indigo-600/10 p-6 rounded-full mb-6 border border-indigo-500/20">
            <Rocket size={48} color="#6366f1" strokeWidth={1.5} />
          </View>
          <Text className="text-white text-4xl font-black tracking-tighter text-center">
            STARTER<Text className="text-indigo-500"> KIT</Text>
          </Text>
          <Text className="text-slate-500 text-base mt-2 font-medium text-center">
            React Native + NestJS + Prisma + GluestackUI
          </Text>
        </VStack>

        {/* MAIN ACTIONS */}
        <View className="flex-1 justify-center">
          <VStack space="xl">
            <View className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <HStack space="md" className="items-center mb-4">
                <View className="bg-indigo-600/20 p-2 rounded-lg">
                  <Cpu size={20} color="#6366f1" />
                </View>
                <Text className="text-white font-bold text-lg">
                  Features Ready
                </Text>
              </HStack>
              <VStack space="xs">
                <Text className="text-slate-400">• Turborepo Monorepo</Text>
                <Text className="text-slate-400">
                  • NativeWind v4 (Tailwind)
                </Text>
                <Text className="text-slate-400">• Gluestack UI v3</Text>
                <Text className="text-slate-400">• NestJS Backend</Text>
                <Text className="text-slate-400">• Prisma + PostgreSQL</Text>
              </VStack>
            </View>

            <Button
              size="xl"
              onPress={() => {
                Linking.openURL(
                  "https://github.com/marioccomp/nativenest-starter-kit"
                );
              }}
              className="bg-indigo-600 h-16 rounded-2xl shadow-2xl active:scale-95 transition-all flex-row justify-center items-center"
            >
              <HStack space="md" className="items-center justify-center" >
                <Github size={20} color="white" strokeWidth={2} />
                <ButtonText
                  className="text-white font-bold text-lg"
                >
                  View Documentation
                </ButtonText>
              </HStack>
            </Button>
          </VStack>
        </View>

        {/* FOOTER */}
        <View className="pb-10">
          <Text className="text-slate-700 text-center text-xs font-bold uppercase tracking-[4px]">
            Ready to Build
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
