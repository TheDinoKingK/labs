package com.thedinoking.testcloudspear.item.custom;

import net.minecraft.block.BlockState;
import net.minecraft.block.Blocks;
import net.minecraft.entity.Entity;
import net.minecraft.entity.player.PlayerEntity;
import net.minecraft.item.Item;
import net.minecraft.item.ItemStack;
import net.minecraft.item.ItemUseContext;
import net.minecraft.util.ActionResultType;
import net.minecraft.world.World;

import java.util.Objects;

public class Spear extends Item {
    /**
     *  Functionality of the spear (for reference creation)
     *  like a trident you can hold right click to arm the spear and then throw It to kill an entity
     *  using It like a regular sword also works
     *  It also works really well with digging dirt, grass, soul-sand, sand, and gravel
     *  possible enchantments are: sharpness, looting, and impaling(for all mobs)
     */


//    static private final int MAX_PER_STACK = 1; // doesn't allow you to stack the weapon due to this
//
//    public Spear(Properties properties) {
//        super(ItemTier.STONE, new Item.Properties().maxStackSize(MAX_PER_STACK).group(ItemGroup.COMBAT));
//    }

    public Spear(Properties properties) {
        super(properties);
    }
//
//
//    public static float getChargeUpTime(ItemStack stack, @Nullable World worldIn, @Nullable LivingEntity entityIn) {
//        final float IDLE_FRAME_INDEX = 0.0f;
//        final float FULLY_CHARGED_INDEX = 1.0f;
//        final int FULL_CHARGE_TICKS = 20;
//
//        if(worldIn == null && entityIn != null) {
//            worldIn = entityIn.world;
//        }
//
//        if (entityIn == null || worldIn == null) return IDLE_FRAME_INDEX;
//
//        if(!entityIn.isHandActive()) {
//            return IDLE_FRAME_INDEX;
//        }
//        int ticksInUse = stack.getUseDuration() - entityIn.getItemInUseCount();
//
//        return (float)UsefulFunctions.interpolate_with_clipping (
//            ticksInUse, 0, FULL_CHARGE_TICKS,
//            IDLE_FRAME_INDEX, FULLY_CHARGED_INDEX);
//    }

    @Override
    public ActionResultType onItemUseFirst(ItemStack stack, ItemUseContext context) {
        World world = context.getWorld();

        if(!world.isRemote) {
            PlayerEntity playerEntity = Objects.requireNonNull(context.getPlayer());
            BlockState clickedBlock = world.getBlockState(context.getPos());

            rightClickOnCertainBlockState(clickedBlock, context, playerEntity);
            stack.damageItem(1, playerEntity, player -> player.sendBreakAnimation(context.getHand()));
        }

        return super.onItemUseFirst(stack, context);
    }

    private void rightClickOnCertainBlockState(BlockState clickedBlock, ItemUseContext context, PlayerEntity playerEntity) {
        boolean pNotOnFire = !playerEntity.isBurning();

        if(random.nextFloat() > 0.5f) {
            // light player on fire
        } else if(pNotOnFire && blockIsValidForResistance(clickedBlock)) {
            // gain fire res and destroy block
        } else {
            // light ground on fire
        }
    }

    private boolean blockIsValidForResistance(BlockState clickedBlock) {
        return clickedBlock.getBlock() == Blocks.OBSIDIAN;
    }

    public static void lightEntityOnFire(Entity entity, int second) {
        entity.setFire(second);
    }
}
