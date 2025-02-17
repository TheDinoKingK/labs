package com.TDK.testmod;

import com.TDK.testmod.item.ModItemTier;
import net.minecraft.item.Item;
import net.minecraft.item.ItemGroup;
import net.minecraft.item.SwordItem;
import net.minecraftforge.fml.RegistryObject;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class RegistryHandler {
    public static final DeferredRegister<Item> ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, TestMod.MODID);

    public static final RegistryObject<SwordItem> NAME_SPEAR = ITEMS.register("name_spear", () -> new SwordItem(ModItemTier.SPEAR, 5, -2.8f, new Item.Properties().group(ItemGroup.COMBAT)));

}