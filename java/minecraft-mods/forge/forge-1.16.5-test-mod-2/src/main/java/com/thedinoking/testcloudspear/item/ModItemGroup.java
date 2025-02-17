package com.thedinoking.testcloudspear.item;

import net.minecraft.item.ItemGroup;
import net.minecraft.item.ItemStack;

public class ModItemGroup {
    public static final ItemGroup TESTCLOUD_GROUP = new ItemGroup("TDKModsTab") {
        @Override
        public ItemStack createIcon() {
            return new ItemStack(ModItems.ROCK.get());
        }
    };
}
